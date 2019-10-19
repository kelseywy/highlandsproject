class FixProductRefs < ActiveRecord::Migration[6.0]
  def change
    remove_reference :products, index: true, foreign_key: true
  end
end
