class ProductProperty < ApplicationRecord
  belongs_to :property
  belongs_to :product
  attr_accessor :value

  validates :value, presence: true
  validates :value, length: { maximum: 255,
    too_long: "%{count} characters is the maximum allowed" }

end
