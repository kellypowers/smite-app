class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :item_id
      t.integer :item_tier
      t.integer :price
      t.string :short_description
      t.string :item_image
      t.string :item_secondary_description
    end
  end
end
