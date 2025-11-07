# Exercício 3: Sistema de Autenticação Multi-Provedor

## 📋 Descrição do Problema

Um sistema precisa suportar autenticação através de diferentes provedores (Google, Facebook, GitHub). Cada provedor tem componentes específicos:

- **Google**: `GoogleAuthButton`, `GoogleAuthToken`, `GoogleUserProfile`
- **Facebook**: `FacebookAuthButton`, `FacebookAuthToken`, `FacebookUserProfile`
- **GitHub**: `GitHubAuthButton`, `GitHubAuthToken`, `GitHubUserProfile`

O sistema precisa garantir que não seja possível misturar componentes de provedores diferentes (ex: `GoogleAuthButton` com `FacebookAuthToken`). Além disso, o sistema deve ser facilmente extensível para novos provedores.

## 🎯 Objetivo

Implementar o padrão **Abstract Factory** para criar famílias de componentes de autenticação compatíveis por provedor.

## 📐 Sugestão de Solução (PlantUML)

```plantuml
@startuml
package "Products" {
  interface AuthButton {
    +render(): string
    +onClick(): void
  }
  
  interface AuthToken {
    +generate(): string
    +validate(token: string): boolean
  }
  
  interface UserProfile {
    +getUserInfo(): object
    +extractData(token: string): object
  }
  
  class GoogleAuthButton
  class GoogleAuthToken
  class GoogleUserProfile
  
  class FacebookAuthButton
  class FacebookAuthToken
  class FacebookUserProfile
  
  class GitHubAuthButton
  class GitHubAuthToken
  class GitHubUserProfile
  
  AuthButton <|.. GoogleAuthButton
  AuthButton <|.. FacebookAuthButton
  AuthButton <|.. GitHubAuthButton
  
  AuthToken <|.. GoogleAuthToken
  AuthToken <|.. FacebookAuthToken
  AuthToken <|.. GitHubAuthToken
  
  UserProfile <|.. GoogleUserProfile
  UserProfile <|.. FacebookUserProfile
  UserProfile <|.. GitHubUserProfile
}

package "Factory" {
  interface AuthProviderFactory {
    +createAuthButton(): AuthButton
    +createAuthToken(): AuthToken
    +createUserProfile(): UserProfile
  }
  
  class GoogleAuthFactory
  class FacebookAuthFactory
  class GitHubAuthFactory
  
  AuthProviderFactory <|.. GoogleAuthFactory
  AuthProviderFactory <|.. FacebookAuthFactory
  AuthProviderFactory <|.. GitHubAuthFactory
  
  GoogleAuthFactory --> GoogleAuthButton
  GoogleAuthFactory --> GoogleAuthToken
  GoogleAuthFactory --> GoogleUserProfile
  
  FacebookAuthFactory --> FacebookAuthButton
  FacebookAuthFactory --> FacebookAuthToken
  FacebookAuthFactory --> FacebookUserProfile
  
  GitHubAuthFactory --> GitHubAuthButton
  GitHubAuthFactory --> GitHubAuthToken
  GitHubAuthFactory --> GitHubUserProfile
}

package "Client" {
  class AuthManager {
    -factory: AuthProviderFactory
    +constructor(factory: AuthProviderFactory)
    +authenticate(): object
  }
  
  AuthManager --> AuthProviderFactory
  AuthManager --> AuthButton
  AuthManager --> AuthToken
  AuthManager --> UserProfile
}
@enduml
```

## ✅ Critérios de Avaliação

1. ✅ Três interfaces abstratas para componentes de autenticação
2. ✅ Implementações concretas para cada provedor
3. ✅ Fábricas que garantem compatibilidade
4. ✅ Cliente usa apenas interfaces para autenticar
5. ✅ Testes validando fluxo completo de autenticação

## 💡 Dicas

- O método `authenticate` deve: renderizar button → gerar token → extrair perfil
- Implemente validação de token para cada provedor
- Considere adicionar um enum `AuthProvider` para identificar o provedor

