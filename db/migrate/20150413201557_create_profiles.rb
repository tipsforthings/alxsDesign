class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :firstname
      t.string :lastname
      t.text :bio
      t.datetime :dateofbirth

      t.timestamps null: false
    end
  end
end
