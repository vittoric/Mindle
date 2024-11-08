# Makefile for Docker Compose Commands with Colors and Symbols

.PHONY: up up-detached down build ps backend frontend logs exec status clean clean-all restart help

# Colors and Symbols
GREEN := \033[0;32m
RED := \033[0;31m
YELLOW := \033[0;33m
CYAN := \033[0;36m
RESET := \033[0m
CHECKMARK := ✔
CROSSMARK := ✘

# Start the Docker Compose environment in attached mode
up:
	@echo "$(CYAN)Starting Docker Compose in attached mode...$(RESET)"
	@docker compose up --build || { echo "$(RED)Failed to start Docker Compose $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Docker Compose started successfully $(CHECKMARK)$(RESET)"

# Start the Docker Compose environment in detached mode
up-detached:
	@echo "$(CYAN)Starting Docker Compose in detached mode...$(RESET)"
	@docker compose up -d || { echo "$(RED)Failed to start Docker Compose $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Docker Compose started successfully in detached mode $(CHECKMARK)$(RESET)"

# Stop the Docker Compose environment
down:
	@echo "$(CYAN)Stopping Docker Compose...$(RESET)"
	@docker compose down || { echo "$(RED)Failed to stop Docker Compose $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Docker Compose stopped successfully $(CHECKMARK)$(RESET)"

# Build or rebuild services
build:
	@echo "$(CYAN)Building Docker Compose services...$(RESET)"
	@docker compose build || { echo "$(RED)Failed to build services $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Services built successfully $(CHECKMARK)$(RESET)"

# View the status of running containers
ps:
	@echo "$(CYAN)Displaying the status of running containers...$(RESET)"
	@docker compose ps

# Make Backend with Database
backend:
	@echo "$(CYAN)Creating backend with database...$(RESET)"
	@docker compose up backend db || { echo "$(RED)Failed to start backend and database $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Backend and database started successfully $(CHECKMARK)$(RESET)"

# Make Frontend
frontend:
	@echo "$(CYAN)Starting the frontend...$(RESET)"
	@docker compose up frontend || { echo "$(RED)Failed to start frontend $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Frontend started successfully $(CHECKMARK)$(RESET)"

# Show logs from all services
logs:
	@echo "$(CYAN)Showing logs from all services...$(RESET)"
	@docker compose logs -f

# Run a command in a service container
# e.g. make exec service=backend cmd=bash
exec:
	@echo "$(CYAN)Executing command in $(service)...$(RESET)"
	@docker compose exec $(service) $(cmd) || { echo "$(RED)Failed to execute command in $(service) $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Command executed successfully $(CHECKMARK)$(RESET)"

# Display status of Docker resources (containers, volumes, images, networks)
status:
	@echo "$(CYAN)Displaying status of Docker resources...$(RESET)"
	@echo "$(YELLOW)Docker Containers:$(RESET)"
	@docker ps
	@echo "$(YELLOW)\nDocker Volumes:$(RESET)"
	@docker volume ls
	@echo "$(YELLOW)\nDocker Networks:$(RESET)"
	@docker network ls

# Remove stopped containers, unused networks, and dangling images/volumes
clean:
	@echo "$(CYAN)Cleaning up Docker resources...$(RESET)"
	@docker system prune -f || { echo "$(RED)Failed to clean Docker resources $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Docker resources cleaned successfully $(CHECKMARK)$(RESET)"

# Remove all Docker resources (use with caution)
clean-all:
	@echo "$(RED)Removing all Docker resources...$(RESET)"
	@docker system prune -a -f --volumes || { echo "$(RED)Failed to remove all Docker resources $(CROSSMARK)$(RESET)"; exit 1; }
	@sudo rm -rf db
	@echo "$(GREEN)All Docker resources removed successfully $(CHECKMARK)$(RESET)"

# Restart the Docker Compose environment
restart:
	@echo "$(CYAN)Restarting Docker Compose...$(RESET)"
	@docker compose down || { echo "$(RED)Failed to stop Docker Compose $(CROSSMARK)$(RESET)"; exit 1; }
	@docker compose up --build -d || { echo "$(RED)Failed to start Docker Compose $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Docker Compose restarted successfully $(CHECKMARK)$(RESET)"

# Make python virtual enviorment (.venv)
python-env:
	@echo "$(CYAN)Creating python virtual environment...$(RESET)"
	@python3 -m venv .venv || { echo "$(RED)Failed to create python virtual environment $(CROSSMARK)$(RESET)"; exit 1; }
	@echo "$(GREEN)Python virtual environment created successfully $(CHECKMARK)$(RESET)"

# Help command to list all the available commands
help:
	@echo "$(YELLOW)Makefile commands:$(RESET)"
	@echo "  $(GREEN)make up$(RESET)           - Start the Docker Compose environment in attached mode"
	@echo "  $(GREEN)make up-detached$(RESET)  - Start the Docker Compose environment in detached mode"
	@echo "  $(GREEN)make down$(RESET)         - Stop the Docker Compose environment"
	@echo "  $(GREEN)make build$(RESET)        - Build or rebuild services"
	@echo "  $(GREEN)make ps$(RESET)           - View the status of running containers"
	@echo "  $(GREEN)make logs$(RESET)         - Show logs from all services"
	@echo "  $(GREEN)make exec$(RESET)         - Run a command in a service container (use: make exec service=<service> cmd=<command>)"
	@echo "  $(GREEN)make status$(RESET)       - Display status of Docker resources (containers, volumes, images, networks)"
	@echo "  $(GREEN)make clean$(RESET)        - Remove stopped containers, unused networks, and dangling images/volumes"
	@echo "  $(GREEN)make clean-all$(RESET)    - Remove all Docker resources (use with caution)"
	@echo "  $(GREEN)make restart$(RESET)      - Restart the Docker Compose environment"
	@echo "  $(GREEN)make backend$(RESET)      - Start Backend with Database"
	@echo "  $(GREEN)make frontend$(RESET)     - Start Frontend"
	@echo "  $(GREEN)make python-env$(RESET)   - Create python virtual environment (.venv)"
	@echo "  $(GREEN)make help$(RESET)         - Show this help message"
