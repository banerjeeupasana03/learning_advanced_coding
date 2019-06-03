class Vehicle
  attr_accessor :wheels

  def initialize(num_of_wheels)
    self.wheels = num_of_wheels
  end
end

car = Vehicle.new(4)
puts car.wheels

bike = Vehicle.new(2)
puts bike.wheels