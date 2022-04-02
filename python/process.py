import sys
import json
import scipy

obj = json.loads(sys.argv[1])
obj["math"] += 9
obj["name"] = "NoT Alfred"
print(str(obj))
