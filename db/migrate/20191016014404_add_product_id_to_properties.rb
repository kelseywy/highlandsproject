class AddProductIdToProperties < ActiveRecord::Migration[6.0]
  def change
    add_reference :products, index: true, foreign_key: true
  end
end
