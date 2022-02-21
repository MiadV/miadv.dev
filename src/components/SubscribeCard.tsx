import React, { useRef, useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import Input from './Input';
import LoadingSpinnerIcon from '@/Icons/LoadingSpinnerIcon';

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};

const SubscribeCard = () => {
  const [formState, setFormState] = useState<FormState>({
    state: Form.Initial,
  });
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormState({ state: Form.Loading });
    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: emailInputRef.current?.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();

      if (error) {
        setFormState({
          state: Form.Error,
          message: error,
        });
        return;
      }

      if (emailInputRef.current) {
        emailInputRef.current.value = '';
      }
      setFormState({
        state: Form.Success,
        message: `Congrats! You're now subscribed.`,
      });
    } catch (err) {
      setFormState({
        state: Form.Error,
        message: 'Something went wrong!',
      });
      return;
    }
  };

  return (
    <Card>
      <div id="subscribe" className="text-center">
        <span className="text-xl font-bold">Subscribe to the newsletter</span>
        <p>Get emails from me about web development, tech...</p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
          <Input
            type="email"
            required
            placeholder="Email Address"
            ref={emailInputRef}
          />
          <Button fullWidth disabled={formState.state === Form.Loading}>
            {formState.state === Form.Loading && (
              <span className="mr-2">
                <LoadingSpinnerIcon />
              </span>
            )}
            Subscribe
          </Button>
        </form>
        <div className="mt-4">
          {formState.state === Form.Success && (
            <span className="font-medium text-emerald-500">
              {formState.message}
            </span>
          )}

          {formState.state === Form.Error && (
            <span className="font-medium text-red-500">
              {formState.message}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SubscribeCard;
