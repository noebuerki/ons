# ons
Online Name Server

# Softwarearchitektur

# Sicherheitsrelevante Aspekte/Vektoren

# UI-Design

@Lars

# Persistenz & Handhabung Credentials

# Umsetzung und Handhabung Session

# Einsatzfähigkeit (Account Erstellung/Löschung, Login,/Logout, etc)

# Injektion

Beispiel @Lars

## Deployment

### Build Pipelines

Unser Frontend und Backend werden, sobald diese aktualisiert werden, automatisch als Docker Container verpackt und im Docker-Hub publiziert.
Sobald das neue Image im Docker-Hub publiziert wurde, löst die Build-Pipeline automatisch ein Redeployment auf dem Docker-Host aus.

### Docker-Deployment

Unser Projekt wird in 3 separaten Docker-Containern betrieben

- Frontend
- Backend
- Datenbank

Damit das Backend geschützt mit der Datenbank kommunizieren kann, werden diese Container mit einem Docker-Netzwerk verbunden.
Dadurch ist die Datenbank nicht öffentlich zugänglich und alle Zugriffe erfolgen durch das Backend (Stichwort Security).

### Reverse Proxy

Alle Zugriffe auf unsere Docker-Container laufen über einen Reverse-Proxy. Dadurch kann das Https-Handling ausserhalb der Container geschehen.
Auch können die diversen Vorteile wie Caching von Nginx genutzt werden.
Dieser Proxy leitet automatisch alle Aufrufe auf den Pfad ```/api/*``` an den Backend Container. Alle anderen Zugriffe werden an den Frontend-Container weitergeleitet.

# Libraries

# Logging
