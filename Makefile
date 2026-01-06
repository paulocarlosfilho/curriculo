# Makefile para automação do Portfólio DevOps

.PHONY: install dev build preview clean help

# Variáveis
NPM = npm

help: ## Mostra esta ajuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Instala as dependências do projeto
	$(NPM) install

dev: ## Inicia o servidor de desenvolvimento
	$(NPM) run dev

build: ## Gera a versão de produção (pasta dist)
	$(NPM) run build

preview: ## Visualiza a versão de produção localmente
	$(NPM) run preview

clean: ## Remove a pasta de build e node_modules
	rm -rf dist
	rm -rf node_modules
