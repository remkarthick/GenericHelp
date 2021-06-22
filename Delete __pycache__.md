# In Flask application, the __pycache__ folder will be created in all folders and subfolders. If you want to delete all of them, then use the below command

for /R . %G in (__pycache__) do rmdir /S/Q "%G"

- this will remove the directory named "__pycache__" from the current folder and all sub folders
