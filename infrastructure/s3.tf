#################
# S3 resources
#################
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.josemariodev_portfolio_s3_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "josemariodev_portfolio_s3_bucket" {
  bucket = aws_s3_bucket.josemariodev_portfolio_s3_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}
resource "aws_s3_bucket" "josemariodev_portfolio_s3_bucket" {
  bucket        = local.prefix
  acl           = "private"
  force_destroy = true

  #   policy = <<EOF
  # {
  #   "Version": "2012-10-17",
  #   "Statement": [
  #     {
  #       "Sid": "PublicReadGetObject",
  #       "Action": [
  #         "s3:GetObject"
  #       ],
  #       "Effect": "Allow",
  #       "Resource": "arn:aws:s3:::${local.prefix}/*",
  #       "Principal": "*"
  #     }
  #   ]
  # }
  # EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
  versioning {
    enabled = true
  }

  tags = local.common_tags
}
