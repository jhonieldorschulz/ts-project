# Exercício 4: Sistema de Cache Multi-Backend

## 📋 Descrição do Problema

Um sistema precisa suportar diferentes backends de cache (Redis, Memcached, In-Memory). Cada backend tem componentes específicos:

- **Redis**: `RedisConnection`, `RedisCache`, `RedisLock`
- **Memcached**: `MemcachedConnection`, `MemcachedCache`, `MemcachedLock`
- **In-Memory**: `MemoryConnection`, `MemoryCache`, `MemoryLock`

O sistema precisa garantir que não seja possível misturar componentes de backends diferentes (ex: `RedisConnection` com `MemcachedCache`). O sistema deve permitir trocar de backend facilmente sem modificar o código cliente.

## 🎯 Objetivo

Implementar o padrão **Abstract Factory** para criar famílias de componentes de cache compatíveis por backend.

## 📐 Sugestão de Solução (PlantUML)

```plantuml
@startuml
package "Products" {
  interface CacheConnection {
    +connect(): void
    +disconnect(): void
    +isConnected(): boolean
  }
  
  interface Cache {
    +get(key: string): any
    +set(key: string, value: any): void
    +delete(key: string): void
  }
  
  interface CacheLock {
    +acquire(key: string): boolean
    +release(key: string): void
  }
  
  class RedisConnection
  class RedisCache
  class RedisLock
  
  class MemcachedConnection
  class MemcachedCache
  class MemcachedLock
  
  class MemoryConnection
  class MemoryCache
  class MemoryLock
  
  CacheConnection <|.. RedisConnection
  CacheConnection <|.. MemcachedConnection
  CacheConnection <|.. MemoryConnection
  
  Cache <|.. RedisCache
  Cache <|.. MemcachedCache
  Cache <|.. MemoryCache
  
  CacheLock <|.. RedisLock
  CacheLock <|.. MemcachedLock
  CacheLock <|.. MemoryLock
}

package "Factory" {
  interface CacheBackendFactory {
    +createConnection(): CacheConnection
    +createCache(): Cache
    +createLock(): CacheLock
  }
  
  class RedisBackendFactory
  class MemcachedBackendFactory
  class MemoryBackendFactory
  
  CacheBackendFactory <|.. RedisBackendFactory
  CacheBackendFactory <|.. MemcachedBackendFactory
  CacheBackendFactory <|.. MemoryBackendFactory
  
  RedisBackendFactory --> RedisConnection
  RedisBackendFactory --> RedisCache
  RedisBackendFactory --> RedisLock
  
  MemcachedBackendFactory --> MemcachedConnection
  MemcachedBackendFactory --> MemcachedCache
  MemcachedBackendFactory --> MemcachedLock
  
  MemoryBackendFactory --> MemoryConnection
  MemoryBackendFactory --> MemoryCache
  MemoryBackendFactory --> MemoryLock
}

package "Client" {
  class CacheManager {
    -factory: CacheBackendFactory
    +constructor(factory: CacheBackendFactory)
    +store(key: string, value: any): void
    +retrieve(key: string): any
  }
  
  CacheManager --> CacheBackendFactory
  CacheManager --> CacheConnection
  CacheManager --> Cache
  CacheManager --> CacheLock
}
@enduml
```

## ✅ Critérios de Avaliação

1. ✅ Três interfaces abstratas para componentes de cache
2. ✅ Implementações concretas para cada backend
3. ✅ Fábricas que garantem compatibilidade
4. ✅ Cliente usa apenas interfaces
5. ✅ Testes validando operações de cache

## 💡 Dicas

- O método `store` deve: conectar → adquirir lock → set → release lock
- O método `retrieve` deve: conectar → get → retornar
- Implemente tratamento de erros para conexão

