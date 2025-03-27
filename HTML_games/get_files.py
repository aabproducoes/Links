import os

def get_all_files(directory):
    try:
        # Initialize an empty list to store all file paths
        all_files = []
        
        # Walk through directory tree
        for root, dirs, files in os.walk(directory):
            for file in files:
                # Get full path and convert to absolute path
                full_path = os.path.abspath(os.path.join(root, file))
                all_files.append(full_path)
        
        return all_files
    
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return []

def save_to_file(file_list, output_file='file_list.txt'):
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            for file_path in file_list:
                f.write(f"{file_path}\n")
        print(f"Successfully saved {len(file_list)} file paths to {os.path.abspath(output_file)}")
    except Exception as e:
        print(f"Error saving to file: {str(e)}")

# Example usage
if __name__ == "__main__":
    # Use current working directory (where script is run from)
    # You can change this to any local path like "C:/Users/YourName/Documents"
    directory_path = os.getcwd()  # Gets current working directory
    
    # Get list of all files
    files = get_all_files(directory_path)
    
    # Save to file_list.txt
    if files:
        save_to_file(files)
    else:
        print("No files found to save")