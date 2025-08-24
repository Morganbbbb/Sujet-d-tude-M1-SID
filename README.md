# Projet Node.js + n8n Webhook

Ce projet contient un script **Node.js** (`index.js`) qui envoie des requêtes à un workflow **n8n** via un **webhook**.

## ⚙️ Prérequis
- [Node.js](https://nodejs.org/) installé (version 18+ recommandée)
- Un workflow n8n configuré avec un **webhook**
- Un bot **Discord** créé
- Une clé API **Mistral**

## 🚀 Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/tonpseudo/ton-repo.git
   cd ton-repo

## Installez les dépendances
npm install

## Configurez vos variables d'environnement dans un fichier .env
DISCORD_TOKEN = ton_tokendiscord
N8N_WEBHOOK_URL = url_du_webhook

## Exécution
node index.js


# Noeuds Mistral et Discord

Les credentials pour Mistral et Discord ne sont **pas inclus** pour des raisons de sécurité.
