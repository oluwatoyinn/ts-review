import React from "react";

type User = {
  id: string;
  name: string;
  age?: number;
};

/**
 * <Partial>
 * return all the objects and makes them optional
 */
type PartialUser = Partial<User>;

/**
 * <Required>
 * @returns all optional properties as required
 */

type RequiredUser = Required<User>;

/**
 * Omit
 * @returns remove properties from an object
 */

type OmitUser = Omit<User, "id">;

/**
 * Pick
 * @returns only the picked property
 */

type PickName = Pick<User, "name">;

type Role = "admin" | "user" | "anonymous";

type NonAdminRole = Exclude<Role, "admin">;

// utility types with functions

type Func = (a: number, b: string, c: boolean) => number;

type ReturnValue = ReturnType<Func>;

// to remove/extract the parameters type of a return data or function from an external library

type Params = Parameters<Func>;

// remove non nullable parameters

type MaybeString = string | null | undefined

type DefinitelyString = NonNullable<MaybeString>



const TypesUtilities = () => {
  return <div></div>;
};

export default TypesUtilities;
