import shutil
import glob

# Define the source and destination paths
src_paths = ["../src/**/*", "../src/lib/**/*", "../build/**/*"]
dest_path = "out"

# Copy the files
for src_path in src_paths:
    files = glob.glob(src_path, recursive=True)
    for file in files:
        if not file.endswith('.ts') and not file.endswith('.scss'):
            shutil.copy2(file, dest_path)