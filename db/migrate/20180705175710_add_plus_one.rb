class AddPlusOne < ActiveRecord::Migration[5.1]
  def change
    add_column :invites, :plusone, :string
  end
end
