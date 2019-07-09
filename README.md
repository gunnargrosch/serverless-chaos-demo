# Serverless Chaos Engineering Demo

This example demonstrates how to use Adrian Hornsby's Failure Injection Layer (https://github.com/adhorn/FailureInjectionLayer) to perform chaos engineering experiments on a serverless environment.

## Description

The demo application consists of a simple serverless app containing four different functions behind an API Gateway and a static webpage showing the result of these functions. An example can be seen at (http://serverless-chaos-demo-larger.s3-website-eu-west-1.amazonaws.com/). By using the failure injection layer you are able to inject failure to each function and see on the page what happens.

## Videos

These are two videos showing examples:

* https://www.youtube.com/watch?v=xxogwzUMg7c
* https://www.youtube.com/watch?v=Cw-JmAJHG-g

## How to install

This is prepared to be installed using the Serverless Framework (https://serverless.com) and the Finch plugin. Make sure to have the Failure Injection Layer installed in your account (https://github.com/adhorn/FailureInjectionLayer) and an S3 bucket dedicated for the static webpage (the plugin will remove all contents before uploading).

1. Clone the repository.
2. Install Serverless Framework (if you don't already have it installed).
```bash
npm install -g serverless
```
3. Install Serverless Finch plugin for deployment of the static webpage.
```bash
npm install --save serverless-finch
```
4. Update serverless.yml in the layer property on each function with the ARN to your Failure Injection Layer.
```bash
functions:
  function1:
    handler: items/function1.function
    timeout: 3
    environment:
      LATENCY_INJECTION_PARAM:
        Ref: function1Parameter
    layers:
      - 
```
5. Update serverelss.yml with the name of your S3 bucket for the static webpage.
```bash
custom:
  client:
    bucketName: 
```
5. Deploy the serverless application using Serverless Framework.
```bash
sls deploy --region YOUR_PREFERRED_REGION --stage YOUR_PREFERRED_STAGE
```
6. Open ./client/dist/js/main.js and update function1 through function4 variable with the URL to the GET endpoints from the above deployment output.
7. Deploy the static webpage using Serverless Framework and the Finch plugin.
```bash
sls client deploy --region YOUR_PREFERRED_REGION --stage YOUR_PREFERRED_STAGE
```

## Notes

This is a really early version of this. Features will be added on a regular basis.

## Authors

**Gunnar Grosch** - [GitHub](https://github.com/gunnargrosch) | [Twitter](https://twitter.com/gunnargrosch) | [LinkedIn](https://www.linkedin.com/in/gunnargrosch/)
