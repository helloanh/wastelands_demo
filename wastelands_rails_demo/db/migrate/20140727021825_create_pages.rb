class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :index

      t.timestamps
    end
  end
end
