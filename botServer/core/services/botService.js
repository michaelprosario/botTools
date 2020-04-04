module.exports.BotService = class BotService {
  constructor(botServiceImplementation) {
    this.serviceImplementation = botServiceImplementation;
  }

  forward() {
    return this.serviceImplementation.forward();
  }

  back() {
    return this.serviceImplementation.back();
  }

  left() {
    return this.serviceImplementation.left();
  }

  right() {
    return this.serviceImplementation.right();
  }

  stop() {
    return this.serviceImplementation.stop();
  }
};
