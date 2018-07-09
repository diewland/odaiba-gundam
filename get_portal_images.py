import json

filename = "portal_photos.json"
url = "https://m-dot-betaspike.appspot.com/rpc/geoInfo/getPortalImages"

def response(flow):

    # filter only getPortalImages
    if flow.request.url == url:

        # cast response to dict
        content = json.loads(flow.response.content)
        images = content['result']['portalImages']

        print("########################")
        print("#                      #")
        print("#    found %02d items    #" % len(images))
        print("#                      #")
        print("########################")

        # write to file
        with open(filename, "a") as f:
            for img in images:
                f.write(json.dumps(img))
                f.write(",\n")
