class Property < ApplicationRecord
  belongs_to :product
  has_many :product_properties
  accepts_nested_attributes_for :product_properties
  attr_accessor :property_name,
                :value,
                 :product_properties_attributes


  validates :property_name, presence: true
  validates :property_name, uniqueness: true
  validates :property_name, length: { maximum: 255,
    too_long: "%{count} characters is the maximum allowed" }
end
