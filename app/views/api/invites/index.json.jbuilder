@invites.each do |invite|
  json.set! invite.id do
    json.extract! invite, :id, :username, :plusone, :attending, :capacity, :plus_one_bool
  end
end
