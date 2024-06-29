import os

include = ['App.js','index.css','components']
cwd = os.path.join(os.path.dirname(os.path.abspath(__file__)),'src')



def getFile(item):
    path = os.path.join(cwd,item)
    name = os.path.relpath(path,cwd)
    output= {}
    if os.path.isfile(path):
        with open(path,'r') as f:
            contents = f.read()
        output[name] = contents    
    elif os.path.isdir(path):
        for root,_,files in os.walk(path):
            for f in files:
                fp = os.path.relpath(os.path.join(root,f),cwd)
                output.update(getFile(fp))
    else:
        return {}
    return output
        
data = {}
for item in include:
    data.update(getFile(item))

out = ''
for k,v in data.items():
    out += f'File: {k}\nContents:\n{v}'
print(out)


