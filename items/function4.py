import os
import json
from random import randint
import boto3

from chaos_lib import delayit

@delayit
def delay():
    pass

dynamodb = boto3.resource('dynamodb')

def function(event, context):
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    delay()

    # fetch item from the database
    #result = table.get_item(
    #    Key={
    #        'id': str(randint(1, 16))
    #    }
    #)

    # create a response
    response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
        "body": json.dumps({'Duration': 3000-context.get_remaining_time_in_millis()})
    }

    return response
