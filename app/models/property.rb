class Property < ApplicationRecord
  belongs_to :product
  has_many :product_properties
  accepts_nested_attributes_for :product_properties

  validates :name, presence: true
  validates :name, length: { maximum: 255,
    too_long: "%{count} characters is the maximum allowed" }

  validates :name, uniqueness: true
end
