class AddStuffToPuzzles < ActiveRecord::Migration[5.0]
  change_table :puzzles do |t|
    t.string :title
    t.string :image_url
    t.integer :solution_x
    t.integer :solution_y
  end
end
