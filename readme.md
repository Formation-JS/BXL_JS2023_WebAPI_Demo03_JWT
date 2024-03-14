# Demo 03 - Web API avec JWT

## Objectif
Réaliser une API qui expose des routes et limite leurs acces via un Bearer token (JWT).

## Endpoints de l'API
Message
```
[GET] /message/hello      (Public)
[GET] /message/protected  (Connecter)
[GET] /message/admin      (Connecter + Role Admin)
```
Auth
```
[POST] /auth/login
```