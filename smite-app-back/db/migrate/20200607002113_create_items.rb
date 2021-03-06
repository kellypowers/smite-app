class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :item_id
      t.string :item_stat
      t.integer :item_tier
      t.integer :price
      t.string :short_description
      t.string :item_image
      t.string :item_secondary_description
      t.string :active_flag
    end
  end
end
