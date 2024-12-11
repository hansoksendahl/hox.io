type Entity = string

type ResourceQuantity = number

type Resource = [Entity, ResourceQuantity]

class Stock {
  #quantityByEntity: Map<Entity, ResourceQuantity> = new Map()
  #entities: Set<Entity> = new Set()

  get entities() {
    const entities = new Set(
      [...this.#entities].filter(entity => this.#quantityByEntity.has(entity)),
    )

    this.#entities = entities

    return entities
  }

  quantity(entity: Entity) {
    return this.#quantityByEntity.get(entity) ?? 0
  }

  depositItem(entity: Entity, quantity: ResourceQuantity) {
    const currentQuantity = this.#quantityByEntity.get(entity) ?? 0

    this.#entities.add(entity)
    this.#quantityByEntity.set(entity, Math.max(0, currentQuantity + quantity))
  }

  withdrawItem(entity: Entity, quantity: ResourceQuantity) {
    const currentQuantity = this.#quantityByEntity.get(entity) ?? 0

    const newQuantity = Math.max(0, currentQuantity - quantity)

    if (newQuantity === 0) {
      this.#entities.delete(entity)
      this.#quantityByEntity.delete(entity)
    } else {
      this.#quantityByEntity.set(entity, newQuantity)
    }
  }

  depositItems(entities: Resource[]) {
    entities.forEach(([id, quantity]) => this.depositItem(id, quantity))
  }

  withdrawItems(entities: Resource[]) {
    entities.forEach(([id, quantity]) => this.withdrawItem(id, quantity))
  }
}

const ENTITY = {
  Wood: createEntity(),
}

const stock = new Stock()

stock.depositItem(ENTITY.Wood, 2000)
stock.withdrawItem(ENTITY.Wood, 1999)

delete ENTITY.Wood

console.log(stock.entities.has(ENTITY.Wood))
