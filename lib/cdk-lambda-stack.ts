import * as cdk from "@aws-cdk/core";
import * as lambda_service from "../lib/cdk-lambda-service";

export class CdkLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda_service.CdkLambdaService(this, "Widgets");
  }
}
