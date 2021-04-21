# #################
# # DYNAMODB RESOURCES
# #################
# # table

# resource "aws_dynamodb_table" "ntable" {
#   hash_key     = "id"
#   name         = "ntable"
#   billing_mode = "PAY_PER_REQUEST"
#   attribute {
#     name = "id"
#     type = "S"
#   }
# }
