# #################
# # DYNAMODB RESOURCES
# #################
# # table

# resource "aws_dynamodb_table" "VisitorTable" {
#   hash_key     = "Site"
#   name         = "VisitorTable"
#   billing_mode = "PAY_PER_REQUEST"
#   attribute {
#     name = "Site"
#     type = "S"
#   }
# }

# # add first item but only the first time run

# resource "aws_dynamodb_table_item" "VisitorTableItem" {
#   table_name = aws_dynamodb_table.VisitorTable.name
#   hash_key   = aws_dynamodb_table.VisitorTable.hash_key
#   lifecycle { ignore_changes = [item] }

#   item = <<ITEM
# {
#   "Site": {"S": "Resume"},
#   "Visitors": {"N": "0"}
# }
# ITEM
# }