class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.integer :category_id
      t.text :article

      t.timestamps null: false
    end
  end
end
