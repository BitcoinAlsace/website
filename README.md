# Site web Bitcoin Alsace

Site statique de l'association [Bitcoin Alsace](https://bitcoinalsace.fr), développé avec [Astro](https://astro.build).

## Stack

- **Framework :** [Astro](https://astro.build) (site statique, zéro JS par défaut)
- **Contenu des événements :** Markdown (dans `src/content/events/`)
- **Styles :** CSS natif (pas de framework CSS)
- **RSS :** généré automatiquement via `@astrojs/rss`

## Ajouter ou modifier un événement

Les événements sont des fichiers Markdown dans `src/content/events/`. Toute personne ayant accès au dépôt Git peut en ajouter ou en modifier.

### Format d'un fichier événement

Créez un fichier `.md` dans `src/content/events/`, par exemple `mon-evenement.md` :

```markdown
---
title: "Mon événement Bitcoin"
date: 2026-04-08
# endDate: 2026-04-09   # optionnel — pour les événements sur plusieurs jours
category: meetup          # meetup | conference | actu | autre
description: "Courte description affichée dans les cartes d'événement."
location: "Strasbourg"    # optionnel
registrationUrl: "https://t.me/bitcoinalsace"  # optionnel
free: true                # true par défaut
# price: 25               # optionnel — si free: false
draft: false              # true = non publié
---

## Contenu complet de l'événement

Écrivez ici le détail de l'événement en Markdown.
```

### Catégories disponibles

| Valeur | Affichage |
|--------|-----------|
| `meetup` | 🤝 Bitcoin Meetup |
| `conference` | 🗣️ Conférence |
| `actu` | 🎭 Actualité |
| `autre` | 📅 Événement |

### Workflow Git

1. Clonez le dépôt ou créez une branche
2. Ajoutez votre fichier Markdown dans `src/content/events/`
3. Ouvrez une Pull Request
4. Une fois mergée, le site se reconstruit automatiquement

## Développement local

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # build de production dans ./dist/
npm run preview   # prévisualisation du build
```


## Licence

Voir [LICENSE](./LICENSE).
