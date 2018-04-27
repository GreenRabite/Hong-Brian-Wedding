@invites.each do |invite|
  json.set! invite.id do
    json.extract! invite, :id, :username, :attending, :capacity
  end
end
