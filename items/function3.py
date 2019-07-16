import os
import json
from random import randint
import boto3

from chaos_lib import *

client = boto3.client('lambda')
dynamodb = boto3.resource('dynamodb')
ssmclient = boto3.client('ssm')

@corrupt_exception
def function(event, context):
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    # fetch item from the database
    result = table.get_item(
        Key={
            'id': str(randint(1, 16))
        }
    )

    param = ssmclient.get_parameter(Name=os.environ['FAILURE_INJECTION_PARAM'], WithDecryption=False)
    paramvalue = {'Parameter': json.dumps(param['Parameter']['Value'])}
    result['Item'].update(paramvalue) 
    timeout = client.get_function_configuration(FunctionName=os.environ['AWS_LAMBDA_FUNCTION_NAME']).get('Timeout')
    duration = {'Duration': timeout*1000-context.get_remaining_time_in_millis()}
    result['Item'].update(duration)

    # create a response
    response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
        "body": json.dumps(result['Item'])
    }

    return response
