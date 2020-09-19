import os

data_loc = "../db/lyrics"
dirs = os.listdir(data_loc)

data_out = open("../db/all-lyrics.txt", "w")
for data_dir in dirs:
    files = os.listdir(data_loc+"/"+data_dir)
    for file in files:
        data_in = open(data_loc+"/"+data_dir+"/"+file)
        file = file.replace("_", " ")
        file = file.replace(".txt", "")
        file = file + "-" + data_dir
        out = file.replace("_", " ") + "[SEP]"
        for line in data_in:
            line = line.rstrip()
            line+=" "
            out+=line
        out+= "\n"
        data_out.write(out)

    #print(files)


data_out.close()
