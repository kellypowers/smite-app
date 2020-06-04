class CreateGodsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :gods_tables do |t|
      t.string :name
      t.string :pantheon
      t.string :roles
      t.string :title
      t.string :type
      t.string :pros
      t.integer :god_id
      t.string :god_image
      t.string :ability1
      t.string :ability1_description
      t.string :ability1_cooldown
      t.integer :ability1_id
      t.string :ability1_type
      t.string :ability1_image
      t.string :ability2
      t.string :ability2_description
      t.string :ability2_cooldown
      t.integer :ability2_id
      t.string :ability2_type
      t.string :ability2_image
      t.string :ability3
      t.string :ability3_description
      t.string :ability3_cooldown
      t.integer :ability3_id
      t.string :ability3_type
      t.string :ability3_image
      t.string :ability4
      t.string :ability4_description
      t.string :ability4_cooldown
      t.integer :ability4_id
      t.string :ability4_type
      t.string :ability4_image
    end
  end
end
