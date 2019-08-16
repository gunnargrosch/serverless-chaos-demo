# Serverless Chaos Engineering Demo

This example demonstrates how to use Adrian Hornsby's Failure Injection Layer (https://github.com/adhorn/FailureInjectionLayer) to perform chaos engineering experiments on a serverless environment.

## Description

The demo application consists of a simple serverless app containing three different functions behind an API Gateway and a static webpage showing the result of these functions. The functions fetch an url for an image at random from a DynamoDB table. An example can be seen at (https://demo.serverlesschaos.com/). By using the failure injection layer you are able to inject failure to each function and see on the page what happens.

![Serverless Chaos Demo Architecture](client/dist/images/serverless-chaos-demo-architecture.png?raw=true "Serverless Chaos Demo Architecture")

## Videos showing demos

* https://www.youtube.com/watch?v=vKurdrGMFpg
* https://www.youtube.com/watch?v=Cw-JmAJHG-g
* https://www.youtube.com/watch?v=xxogwzUMg7c

## How to install

**Prerequisite**

This is prepared to be installed using the Serverless Framework (https://serverless.com) and the Finch plugin. (installation details below) Before you begin you will also need to complete the following:

* Make sure to have the Failure Injection Layer installed in your account (https://github.com/adhorn/FailureInjectionLayer) and you have the ARN to hand. If you follow this blog post here (https://medium.com/@adhorn/injecting-chaos-to-aws-lambda-functions-using-lambda-layers-2963f996e0ba) and here (https://medium.com/@adhorn/failure-injection-gain-confidence-in-your-serverless-application-ce6c0060f586)

* Create an S3 bucket dedicated for the static webpage (the plugin will remove all contents before uploading). You will need to make the S3 bucket public as step 7 below will fail if it is not.

1. Clone the repository.
2. Install Serverless Framework (if you don't already have it installed).
```bash
npm install -g serverless
```
3. Install Serverless Finch plugin for deployment of the static webpage.
```bash
npm install --save serverless-finch
```
4. Create an env.yml file in the root folder based on the env.yml.template contents.
```bash
account: <your account number>
bucketName: <your bucket name>
layer: <arn of the lambda layer>
failure_conf: '{"isEnabled": false, "delay": 400, "error_code": 404, "exception_msg": "I failed", "rate": 1}'
```
5. Deploy the serverless application using Serverless Framework.
```bash
sls deploy --region YOUR_PREFERRED_REGION --stage YOUR_PREFERRED_STAGE
```
6. Create an env.js file in the folder ./client/dist/assets/js/ based on the env.js.template contents (located in the same folder) with the endpoints from sls deploy output.
```bash
//Enter your API Gateway endpoints for each function here
var function1 = "<function1 api gateway endpoint>";
var function2 = "<function2 api gateway endpoint>";
var function3 = "<function3 api gateway endpoint>";
```
**Note**
If you get an error when you test out these functions that look like the following:
```
{"errorMessage": "Unable to import module 'items/function1': No module named 'ssm_cache'", "errorType": "Runtime.ImportModuleError"}
```
or
```
"errorMessage": "Unable to import module 'items/function1': No module named 'ssm_cache'"
```
Then it is likely that when you created the Failure Injection Layer (see the prerequisite steps above) then you missed packaging up the hidden folder (.vendor) in the python folder that has all the dependencies. Go back and redeploy the layer and then update the layer arn and redeploy the app. This should fix the problem for you.

7. Deploy the static webpage using Serverless Framework and the Finch plugin.
```bash
sls client deploy --region YOUR_PREFERRED_REGION --stage YOUR_PREFERRED_STAGE
```

Note, if you get this error when you run this command:
```
Serverless: Configuring policy for bucket...
 
  Serverless Error ---------------------------------------
 
  ServerlessError: Access Denied
```
Then you might need to make your S3 bucket public.

8. Create an dynamodb.json file in the root folder based on the dynamodb.json.template contents. Replace YOUR_DYNAMODB_TABLE_NAME with your DynamoDB table name.
```bash
{
    "YOUR_DYNAMODB_TABLE_NAME": [
        {
```
9. Populate the DynamoDB table with data using AWS CLI and the created json file.
```bash
aws dynamodb batch-write-item --request-items file://dynamodb.json
```
10. Try it out!

## Notes

This is still a really early version of the app. Features will be added on a regular basis.

## Changelog

### 2019-07-16 v0.2

* New UI with more visibility
* AWS X-Ray enabled by default

### 2019-07-10 v0.15

* Variables moved to env.yml (Thanks to Adrian Hornsby)
* Support for the new version of the Failure Injection Layer (Thanks to Adrian Hornsby)

### 2019-07-09 v0.1

* Initial release

## Authors

**Gunnar Grosch** - [GitHub](https://github.com/gunnargrosch) | [Twitter](https://twitter.com/gunnargrosch) | [LinkedIn](https://www.linkedin.com/in/gunnargrosch/)
