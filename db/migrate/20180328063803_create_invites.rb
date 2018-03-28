class CreateInvites < ActiveRecord::Migration[5.1]
  def change
    create_table :invites do |t|
      t.string :username, null: false
      t.integer :attending, null: false
      t.timestamps
    end
  end
end
