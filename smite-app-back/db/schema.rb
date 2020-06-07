# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_07_002113) do

  create_table "gods", force: :cascade do |t|
    t.string "name"
    t.string "pantheon"
    t.string "lore"
    t.string "roles"
    t.string "title"
    t.string "god_kind"
    t.string "pros"
    t.integer "god_id"
    t.string "god_image"
    t.string "ability1"
    t.string "ability1_description"
    t.string "ability1_cooldown"
    t.integer "ability1_id"
    t.string "ability1_type"
    t.string "ability1_image"
    t.string "ability2"
    t.string "ability2_description"
    t.string "ability2_cooldown"
    t.integer "ability2_id"
    t.string "ability2_type"
    t.string "ability2_image"
    t.string "ability3"
    t.string "ability3_description"
    t.string "ability3_cooldown"
    t.integer "ability3_id"
    t.string "ability3_type"
    t.string "ability3_image"
    t.string "ability4"
    t.string "ability4_description"
    t.string "ability4_cooldown"
    t.integer "ability4_id"
    t.string "ability4_type"
    t.string "ability4_image"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "item_id"
    t.string "item_stat"
    t.integer "item_tier"
    t.integer "price"
    t.string "short_description"
    t.string "item_image"
    t.string "item_secondary_description"
    t.string "active_flag"
  end

end
