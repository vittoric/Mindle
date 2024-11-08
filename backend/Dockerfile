# Get the python3 3.12 image
FROM python:3.12-slim

# Set the working directory (Makes if not exists)
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Update pip and install the requirements
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the files to the working directory
COPY . .

# Run the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]