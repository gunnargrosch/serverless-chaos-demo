import os
import json
from random import randint
import boto3

from chaos_lib import *

@corrupt_delay
def function(event, context):

    response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
        "body": json.dumps({'Duration': 3000-context.get_remaining_time_in_millis()})
    }

    return response
