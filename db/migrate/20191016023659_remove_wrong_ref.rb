class RemoveWrongRef < ActiveRecord::Migration[6.0]
  def change
    remove_reference :properties, :products, foreign_key: true
  end
end
