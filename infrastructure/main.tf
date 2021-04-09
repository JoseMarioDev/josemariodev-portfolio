# specify provider & region
provider "aws" {
  region = "us-east-1"
}

#  specify TF backend, key used to store state file
terraform {
  backend "s3" {
    bucket  = "josemariodev-portfolio-terraform-state"
    key     = "josemariodev-portfolio-state.tfstate"
    region  = "us-east-1"
    encrypt = true

  }
}

# local properties: prefixes, names attached to resources
locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Jose Mario"
  }

}

