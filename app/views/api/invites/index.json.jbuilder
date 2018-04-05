@invites.each do |invite|
  json.set! invite.id do
    json.extract! invite, :username, :attending, :capacity
  end
end
