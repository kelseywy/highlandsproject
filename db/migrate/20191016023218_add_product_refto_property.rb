class AddProductReftoProperty < ActiveRecord::Migration[6.0]
  def change
    add_reference :properties, :product, foreign_key: true
  end
end
