const { EventFactory, Types } = require('@ellementul/united-events-environment')
const type = Types.Object.Def({
  system: "PlayersManagment",
  entity: "PingPong",
  state: "Pong",
  playerUuid: Types.UUID.Def()
}, true) 
module.exports = EventFactory(type)