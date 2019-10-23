class Product < ApplicationRecord
  has_many :properties
  has_many :product_properties,
           :through => :properties
  accepts_nested_attributes_for :properties
  accepts_nested_attributes_for :product_properties
  attr_accessor :properties_attributes,
                :product_properties_attributes

  validates :name, :upc, :available_on, presence: true
  validates :name, :upc, uniqueness: true
  validates :upc, numericality: { only_integer: true }

  validates :name, length: { maximum: 1024,
    too_long: "%{count} characters is the maximum allowed" }


  validate :check_length

  def check_length
    unless upc.size == 10 or upc.size == 12 or upc.size == 13
      errors.add(:upc, "length must be 10, 12, or 13 characters")
    end
  end

  validate :expiration_date_cannot_be_in_the_past

  def expiration_date_cannot_be_in_the_past
    errors.add(:available_on, "must be a future date") if
      !available_on.blank? and available_on < Date.today
  end

end
