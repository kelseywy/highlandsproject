class AddProductRefToProperties < ActiveRecord::Migration[6.0]
  def change
     add_reference :product_properties, :product, foreign_key: true
  end
end
