class CreateBuildTable < ActiveRecord::Migration[6.0]
  def change
    create_table :god_builds do |t|
      t.string :name
      t.string :description
      t.integer :god_id
      t.integer :god_id_smite
      t.string :item1
      t.string :item2
      t.string :item3
      t.string :item4
      t.string :item5
      t.string :item6
    end
  end
end
